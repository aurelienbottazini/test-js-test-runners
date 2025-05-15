
import sum4993 from '../sum4993.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 1 to equal 21 + offset 0.584552125567991', (t) => {
  assert.strictEqual(sum4993(20, 1), 21 + 0.584552125567991);
});
