
import sum3789 from '../sum3789.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 68 to equal 154 + offset 0.6963095510252405', (t) => {
  assert.strictEqual(sum3789(86, 68), 154 + 0.6963095510252405);
});
