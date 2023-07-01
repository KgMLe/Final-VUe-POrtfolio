import { createStore } from 'vuex'
const infoURL = "https://kgmle.github.io/jsondataeomp/data/data.json"
export default createStore({
  state: {
    skills: null,
    education: null,
    experience: null,
    projects: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setSkills(state, skills){
      state.skills =skills
    },
    setEducation(state, education){
      state.education =education
    },
    setExperience(state, experience){
      state.experience =experience
    },
    setProjects(state, projects){
      state.projects =projects
    },
    setTestimonials(state, testimonials){
      state.testimonials =testimonials
    },

  },
  actions: {
    // Skills fetch
    async fetchSkills (context){
      try {
      let res = await fetch (infoURL)
      let {skills} = await res.json
       if(skills){
         context.commit ('setSkills', skills)
       }else{
        alert ("information loading")
       }
      } catch (error) {
        alert(error.message)
      }
    }
  },
  modules: {
  }
})
