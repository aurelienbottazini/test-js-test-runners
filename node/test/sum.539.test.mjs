
import sum539 from '../sum539.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 38 to equal 83 + offset 0.8931429342186785', (t) => {
  assert.strictEqual(sum539(45, 38), 83 + 0.8931429342186785);
});
