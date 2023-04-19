export interface About {
  abilities: [
    {
      ability: {
        name: String
      },
      is_hidden: Boolean
    }
  ],
  height: number,
  id: number,
  name: String,
  sprites: {
    front_default: String,
    front_shiny: String
  },
  types: [
    {
      type: {
        name: String
      }
    }
  ],
  weight: number
}
