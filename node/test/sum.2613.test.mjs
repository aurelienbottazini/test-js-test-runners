
import sum2613 from '../sum2613.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 30 to equal 115 + offset 0.6241906923110929', (t) => {
  assert.strictEqual(sum2613(85, 30), 115 + 0.6241906923110929);
});
