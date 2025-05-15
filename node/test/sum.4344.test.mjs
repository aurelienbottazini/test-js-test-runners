
import sum4344 from '../sum4344.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 65 to equal 152 + offset 0.5933094995899697', (t) => {
  assert.strictEqual(sum4344(87, 65), 152 + 0.5933094995899697);
});
