
import sum1627 from '../sum1627.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 37 to equal 68 + offset 0.63474174695204', (t) => {
  assert.strictEqual(sum1627(31, 37), 68 + 0.63474174695204);
});
