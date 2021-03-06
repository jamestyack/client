'use strict';

angular.module('civicMakersClientApp')
  .factory('AuthorApi', function () {

    var service = {
      getAllAuthors: getAllAuthors,
      queryAuthor: queryAuthor,
      getFirstNAuthors: getFirstNAuthors,
      getAuthorsNum: getAuthorsNum
    };

    return service

    function getAllAuthors(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'profiles',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'Bob!',
                        'description': 'My name is Bob!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'avatars': [
                          {
                            'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                          }
                        ],
                        'url': 'https://www.google.com',
                        'social_links': {
                          'facebook': 'https://www.google.com',
                          'twitter': 'https://www.google.com',
                          'linkedin': 'https://www.google.com'
                        }
                      },
                      'relationships': {
                        'system_owned_tools': {
                          'data': [
                            {
                              'type': 'tools',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'projects': {
                          'data': [
                            {
                              'type': 'projects',
                              'id': 'abc123'
                            }
                          ]
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          }
      ];
      return dummyData
    };

    function getFirstNAuthors(n){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'profiles',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'Bob!',
                        'description': 'My name is Bob!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'avatars': [
                          {
                            'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                          }
                        ],
                        'url': 'https://www.google.com',
                        'social_links': {
                          'facebook': 'https://www.google.com',
                          'twitter': 'https://www.google.com',
                          'linkedin': 'https://www.google.com'
                        }
                      },
                      'relationships': {
                        'system_owned_tools': {
                          'data': [
                            {
                              'type': 'tools',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'projects': {
                          'data': [
                            {
                              'type': 'projects',
                              'id': 'abc123'
                            }
                          ]
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          }
      ];
      return dummyData.slice(0,n)
    };

    function getAuthorsNum(){
      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [
        {
                  'data': [
                    {
                      'type': 'profiles',
                      'id': 'abc123',
                      'attributes': {
                        'name': 'Bob!',
                        'description': 'My name is Bob!',
                        'created_at': '1997-07-16T19:20+01:00',
                        'avatars': [
                          {
                            'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                          }
                        ],
                        'url': 'https://www.google.com',
                        'social_links': {
                          'facebook': 'https://www.google.com',
                          'twitter': 'https://www.google.com',
                          'linkedin': 'https://www.google.com'
                        }
                      },
                      'relationships': {
                        'system_owned_tools': {
                          'data': [
                            {
                              'type': 'tools',
                              'id': 'abc123'
                            }
                          ]
                        },
                        'projects': {
                          'data': [
                            {
                              'type': 'projects',
                              'id': 'abc123'
                            }
                          ]
                        }
                      }
                    }
                  ]
                },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          },{
            'data': [
              {
                'type': 'profiles',
                'id': 'abc123',
                'attributes': {
                  'name': 'Bob!',
                  'description': 'My name is Bob!',
                  'created_at': '1997-07-16T19:20+01:00',
                  'avatars': [
                    {
                      'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                    }
                  ],
                  'url': 'https://www.google.com',
                  'social_links': {
                    'facebook': 'https://www.google.com',
                    'twitter': 'https://www.google.com',
                    'linkedin': 'https://www.google.com'
                  }
                },
                'relationships': {
                  'system_owned_tools': {
                    'data': [
                      {
                        'type': 'tools',
                        'id': 'abc123'
                      }
                    ]
                  },
                  'projects': {
                    'data': [
                      {
                        'type': 'projects',
                        'id': 'abc123'
                      }
                    ]
                  }
                }
              }
            ]
          }
      ];
      return dummyData.length
    };

    function queryAuthor(id){
      console.log('authorID: ', id)
      // TODO: when API is ready inplement query
      var dummyAuthor = {
          'data': [
            {
              'type': 'profiles',
              'id': 'abc123',
              'attributes': {
                'name': 'Bob!',
                'description': 'My name is Bob!',
                'created_at': '1997-07-16T19:20+01:00',
                'avatars': [
                  {
                    'url': 'http://robohash.org/sitsequiquia.png?size=300x300'
                  }
                ],
                'url': 'https://www.google.com',
                'social_links': {
                  'facebook': 'https://www.google.com',
                  'twitter': 'https://www.google.com',
                  'linkedin': 'https://www.google.com'
                }
              },
              'relationships': {
                'system_owned_tools': {
                  'data': [
                    {
                      'type': 'tools',
                      'id': 'abc123'
                    }
                  ]
                },
                'projects': {
                  'data': [
                    {
                      'type': 'projects',
                      'id': 'abc123'
                    }
                  ]
                }
              }
            }
          ]
        };

        return dummyAuthor;
    }

  });
