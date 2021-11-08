/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

import songs from '../server/controllers/Songs.js';

const router = express.Router();

// Song Endpoints//
router.route('/songs')
  .get((req, res) => {
    try {
      const songsList = await db.songs.findAll();
      res.json(songsList);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error!'});
    }
  })
  .put((req, res) => {
    try {
      await db.songs.update(
        {
            song_name: req.body.song_name,
            explicit: req.body.explicit,
            artist_id: req.body.artist_id,
            album_id: req.body.album_id
        },
        {
            where: {
                song_id: req.body.song_id
            }
        }
      );
      res.send('Successfully updated!');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error!'});
    }
  })
  .post((req, res) => {
    const songList = await db.songs.findAll();
    const currentId = (await songList.length) + 1;
    try {
      const newSongs = await db.songs.create({
          song_id: currentId,
          song_name: req.body.song_name,
          explicit: req.body.explicit,
          artist_id: req.body.artist_id,
          album_id: req.body.album_id
      });
      res.json(newSongs);
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error!'});
    }
  })
  .delete((req, res) => {
    try {
      await db.songs.destroy({
          where: {
              song_id: req.params.song_id
          }
      });
      res.send('Successfully deleted!');
    } catch (err) {
      console.log(err);
      res.json({error: 'Server error!'});
    }
  });