
import sum442 from '../sum442.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 89 to equal 97 + offset 0.11898862495015594', (t) => {
  assert.strictEqual(sum442(8, 89), 97 + 0.11898862495015594);
});
