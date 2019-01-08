<template>
  <div id="app">
    <section id="main">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#app {
  max-width: 500px;
  width: 100%;
  height: 500px;
  border: 3px outset rgb(200, 200, 200);
  border-radius: 8px;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 8px;
}

#main {
  flex-grow: 1;
}
</style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Montserrat", serif;
  font-size: 16px;
  line-height: 1.2em;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 250, 250);

  &,
  & *,
  &:after,
  &:before {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
}
p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
