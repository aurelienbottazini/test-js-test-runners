
import sum2050 from '../sum2050.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 67 to equal 154 + offset 0.30239773105556034', (t) => {
  assert.strictEqual(sum2050(87, 67), 154 + 0.30239773105556034);
});
