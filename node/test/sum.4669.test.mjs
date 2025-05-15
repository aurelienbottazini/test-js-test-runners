
import sum4669 from '../sum4669.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 75 to equal 115 + offset 0.4350018243245456', (t) => {
  assert.strictEqual(sum4669(40, 75), 115 + 0.4350018243245456);
});
