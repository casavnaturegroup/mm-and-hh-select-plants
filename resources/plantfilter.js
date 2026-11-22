(function () {

    // Identify the plant layer and scientific-name field
    const plantLayer = lyr_ScarthwoodMoorbogplantsconverted_9;
    const fieldName = 'q2wHide_Scientific Name';

    const source = plantLayer.getSource();
    const features = source.getFeatures();

    // Obtain all the scientific names automatically
    const names = [...new Set(
        features.map(feature => feature.get(fieldName))
    )].filter(Boolean).sort();

    // Remember the original QGIS styling
    //const originalStyle = plantLayer.getStyleFunction();

    // Initially display every species
       const selected = new Set(names);
// Hide species that are not selected
plantLayer.setStyle(function (feature, resolution) {

    const scientificName = feature.get(fieldName);

    if (!selected.has(scientificName)) {
        return null;
    }

    return style_ScarthwoodMoorbogplantsconverted_9(feature, resolution);
});
    // Apply the species filter without changing styling
    //plantLayer.setStyle(function (feature, resolution) {

    //    const scientificName = feature.get(fieldName);

    //    if (!selected.has(scientificName)) {
    //        return null;
    //    }

    //    return originalStyle(feature, resolution);
    //});

    // Create the filter button
    const mapElement = map.getTargetElement();

    const button = document.createElement('button');
    button.textContent = 'Filter plant species';
    button.style.cssText =
        'position:absolute;top:55px;left:10px;z-index:2000;' +
        'padding:7px;cursor:pointer;';

    mapElement.appendChild(button);

    // Create the filter panel
    const panel = document.createElement('div');

    panel.style.cssText =
        'position:absolute;top:90px;left:10px;z-index:2000;' +
        'background:white;padding:10px;border:1px solid #777;' +
        'width:260px;max-height:400px;overflow:auto;' +
        'display:none;font:13px Arial,sans-serif;';

    mapElement.appendChild(panel);

    button.onclick = function () {
        panel.style.display =
            panel.style.display === 'none' ? 'block' : 'none';
    };

    // Search box
    const search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search scientific names';
    search.style.width = '98%';

    panel.appendChild(search);

    // Select all and clear all buttons
    const controls = document.createElement('div');
    controls.style.margin = '8px 0';

    const selectAll = document.createElement('button');
    selectAll.textContent = 'Select all';

    const clearAll = document.createElement('button');
    clearAll.textContent = 'Clear all';

    controls.appendChild(selectAll);
    controls.appendChild(clearAll);

    panel.appendChild(controls);

    // List of species
    const list = document.createElement('div');
    panel.appendChild(list);

    function displaySpecies() {

        list.innerHTML = '';

        names.forEach(function (name) {

            if (!name.toLowerCase().includes(
                search.value.toLowerCase()
            )) {
                return;
            }

            const row = document.createElement('div');
            row.style.margin = '3px 0';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = selected.has(name);

            checkbox.onchange = function () {

                if (checkbox.checked) {
                    selected.add(name);
                } else {
                    selected.delete(name);
                }

                plantLayer.changed();
            };

            const label = document.createElement('label');

            label.appendChild(checkbox);
            label.appendChild(
                document.createTextNode(' ' + name)
            );

            row.appendChild(label);
            list.appendChild(row);

        });
    }

    search.oninput = displaySpecies;

    selectAll.onclick = function () {
        names.forEach(name => selected.add(name));
        displaySpecies();
        plantLayer.changed();
    };

    clearAll.onclick = function () {
        selected.clear();
        displaySpecies();
        plantLayer.changed();
    };

    displaySpecies();

    console.log('Plant filter loaded. Species:', names.length);

})();