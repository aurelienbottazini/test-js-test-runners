
import sum2922 from '../sum2922.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 93 to equal 133 + offset 0.9601694929000334', (t) => {
  assert.strictEqual(sum2922(40, 93), 133 + 0.9601694929000334);
});
