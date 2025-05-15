
import sum3460 from '../sum3460.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 15 to equal 23 + offset 0.4817504030663484', (t) => {
  assert.strictEqual(sum3460(8, 15), 23 + 0.4817504030663484);
});
