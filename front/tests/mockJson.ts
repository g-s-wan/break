export interface MockJson {
  result: string;
  data: any;
}

export function getMockJson(): MockJson {
  return (
      {
        "result": "success",
        "data": [ { "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", "difficulty": 1, "id": 0, "links": [ 1 ], "name": "Indian Step", "type": "Toprock" }, { "description": "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged.", "difficulty": 1, "id": 1, "links": [ 0 ], "name": "Hip Twist", "type": "Toprock" }, { "description": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "difficulty": 1, "id": 2, "links": [ 2, 3, 4, 5 ], "name": "6-Step", "type": "Footwork" }, { "description": "Contrary to popular belief Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.", "difficulty": 1, "id": 3, "links": [ 2, 3, 4, 5 ], "name": "3-Step", "type": "Footwork" }, { "description": "Richard McClintock a Latin professor at Hampden-Sydney College in Virginia looked up one of the more obscure Latin words consectetur from a Lorem Ipsum passage and going through the cites of the word in classical literature discovered the undoubtable source.", "difficulty": 1, "id": 4, "links": [ 2, 3, 4, 5, 6 ], "name": "CC", "type": "Footwork" }, { "description": "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero", "difficulty": 1, "id": 5, "links": [ -1 ], "name": "Baby Freeze", "type": "Freeze" }, { "description": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham.", "difficulty": 2, "id": 6, "links": [ 5 ], "name": "Swipe", "type": "Power" } ] }
  )
}
