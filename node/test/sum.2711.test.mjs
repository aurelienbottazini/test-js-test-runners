
import sum2711 from '../sum2711.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 31 to equal 48 + offset 0.30907228109173435', (t) => {
  assert.strictEqual(sum2711(17, 31), 48 + 0.30907228109173435);
});
