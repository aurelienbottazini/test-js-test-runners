
import sum2933 from '../sum2933.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 0 to equal 41 + offset 0.6030253106185666', (t) => {
  assert.strictEqual(sum2933(41, 0), 41 + 0.6030253106185666);
});
