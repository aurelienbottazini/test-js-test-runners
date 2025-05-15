
import sum3566 from '../sum3566.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 75 to equal 125 + offset 0.5575427777306559', (t) => {
  assert.strictEqual(sum3566(50, 75), 125 + 0.5575427777306559);
});
