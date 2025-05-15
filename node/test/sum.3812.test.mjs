
import sum3812 from '../sum3812.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 69 to equal 139 + offset 0.8530423488379725', (t) => {
  assert.strictEqual(sum3812(70, 69), 139 + 0.8530423488379725);
});
