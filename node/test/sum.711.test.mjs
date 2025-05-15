
import sum711 from '../sum711.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 98 to equal 159 + offset 0.9134339728268492', (t) => {
  assert.strictEqual(sum711(61, 98), 159 + 0.9134339728268492);
});
