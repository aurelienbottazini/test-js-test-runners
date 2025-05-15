
import sum412 from '../sum412.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 62 to equal 140 + offset 0.3478929094813451', (t) => {
  assert.strictEqual(sum412(78, 62), 140 + 0.3478929094813451);
});
