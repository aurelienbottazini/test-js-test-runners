
import sum850 from '../sum850.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 37 to equal 47 + offset 0.162798085930415', (t) => {
  assert.strictEqual(sum850(10, 37), 47 + 0.162798085930415);
});
