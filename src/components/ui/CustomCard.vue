<template>
  <v-card class="full-width" flat>
      <v-card-title class="px-2 py-4" >
        <a
        class="my-custom-link"
        :href=story_url 
        target="_blank">
        {{title}}
      </a>
      
      </v-card-title>

    <v-divider></v-divider>
    <div class="content">
      <div class="user-card px-2 pt-2">
        <v-card class="d-flex align-center" flat tile>
          <v-avatar size="48" class="mr-2 align-self-center" color="primary">
            <span class="white--text text-uppercase">{{ author[0] }}</span>
          </v-avatar>
          <div class="d-flex flex-column align-self-center">
            <div class="text-subtitle mb-0 font-weight-medium">{{ author }}</div>
            <span class="text-caption">{{ date }}</span>
          </div>

        </v-card>
      </div>
      <div class="overflow-hidden text-container  px-2 py-1">
        <v-card-text class="subtitle-1 px-0 py-0" v-html="formattedDescription">
        </v-card-text>
      </div>
    </div>

    <v-card-actions>
      <v-btn v-for="(btn, index) in buttons" :key="index" :color="btn.color" text @click="btn.action">
        {{ btn.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    date: {
      type: String
    },
    story_url: {
      type: String
    },
    buttons: {
      type: Array,
      default: () => [],
      validator: buttons => {
        return buttons.every(btn => 'text' in btn && 'color' in btn && 'action' in btn);
      },
    },
  },
  computed: {
    formattedDescription() {
      return this.description.replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
    },
    titleWithLink() {
      return `<a
        class="my-custom-link"
        href="${this.story_url}" 
        target="_blank">${this.title}
      </a>`;
    }
  }
};
</script>
<style scoped>
.text-container {
  max-height: 5rem;
}

.full-width {
  min-width: 100%;
}
.my-custom-link {
  color: black; 
  text-decoration: none; 
}

.my-custom-link:hover {
  text-decoration: underline; 
}
.align-center {
  align-items: center;
}
</style>