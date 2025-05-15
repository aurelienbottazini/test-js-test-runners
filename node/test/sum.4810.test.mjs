
import sum4810 from '../sum4810.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 87 to equal 162 + offset 0.2585037214614413', (t) => {
  assert.strictEqual(sum4810(75, 87), 162 + 0.2585037214614413);
});
