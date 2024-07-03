<script setup>

</script>

<template>
    <li class="task">
        <div class="textSect">
            <input type="checkbox" name="taskOne">
            <p>Task One</p>
        </div>        
        <div class="btnSect">
          <button class="btn">Edit</button>
          <button class="btn">Delete</button>
        </div>
      </li>
</template>

<style scoped>
.task{
    background-color: peachpuff;
    width: 100%;
    border: 2px solid peachpuff;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.task:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.textSect{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.btnSect{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}

.btn {
  padding: 4px 12px;
  cursor: pointer;
  border: 1px solid black;
  background-color: white;
  border-radius: 4px;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.btn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}
</style>