
import sum4495 from '../sum4495.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 32 to equal 58 + offset 0.4983649740429733', (t) => {
  assert.strictEqual(sum4495(26, 32), 58 + 0.4983649740429733);
});
