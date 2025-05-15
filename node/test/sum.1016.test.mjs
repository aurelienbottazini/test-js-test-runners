
import sum1016 from '../sum1016.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 57 to equal 71 + offset 0.8584012309121294', (t) => {
  assert.strictEqual(sum1016(14, 57), 71 + 0.8584012309121294);
});
