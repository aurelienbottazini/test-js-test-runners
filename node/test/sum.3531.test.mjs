
import sum3531 from '../sum3531.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 74 to equal 161 + offset 0.6560346813467787', (t) => {
  assert.strictEqual(sum3531(87, 74), 161 + 0.6560346813467787);
});
