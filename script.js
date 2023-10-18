document.addEventListener("DOMContentLoaded", function () {
    function main() {
        let packingList = []

          // add item function
const addItemButton = document.querySelector("#addItem")
addItemButton.addEventListener("click", function(){
    const itemNameInput = document.querySelector('#itemName')
    const itemName = itemNameInput.value

    const itemTypeSelect = document.querySelectorAll('.itemType')
    const itemType = itemTypeSelect.value

    const itemQtySelect = document.querySelector('#itemQty')
    const itemQty = itemQtySelect.value

    if (itemName) {
        addToPackingList(packingList, itemName, itemType, itemQty);
        renderPackingItems(packingList)
        itemNameInput.value = '';
    }
})

        // Sample data
        addToPackingList(packingList, "shirt", "t-shirt", 2)
        addToPackingList(packingList, "black-shorts", "shorts", 2)
        addToPackingList(packingList, "socks", "socks", 3)
        addToPackingList(packingList, "adidas-sneakers", "shoes", 2)
        modifyPackingListItem(packingList, packingList[2].id, "shirt", "t-shirt", 1)
        console.log(packingList)
        renderPackingItems(packingList)
    }

    // renderPackingItems function
    function renderPackingItems(packingList) {
        const displayPackingList = document.querySelector("#displayPackingList");
        displayPackingList.innerHTML = '';
        let count = 1
        for (let each of packingList) {
            const newDiv = document.createElement("div");
            newDiv.className = 'd-flex flex-wrap align-items-center p-2 border border-dark'
            newDiv.innerHTML = `<div class="ps-1" id="count">${count}</div>
            <label class="list-group-item border-0 me-auto">
              <input class="form-check-input me-1 p-2 " type="checkbox" value="">
              ${each.name}</label>
              <div class="p-1"><button type="button" class="btn btn-success btn-sm">${each.qty}</button></div>
            <div class="p-1"><button type="button" class="btn btn-primary btn-sm edit-btn">Edit</button></div>
            <div class="p-1"><button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button></div>`
            count++
            displayPackingList.appendChild(newDiv)

            //select the edit button which we just created
            newDiv.querySelector(".edit-btn").addEventListener("click", function(){
                const newName = prompt(`Enter the new item to replace ${each.item}: `, each.name)
                const newItemType = prompt("What type of item is it: ", each.itemType)
                const newQty = prompt("Enter the new item: ", each.qty)
                modifyPackingListItem(packingList,each.id, newName, newItemType, newQty)
                renderPackingItems(packingList)
        
        })
        }
    }
 

    //  Call main function
    main()
})