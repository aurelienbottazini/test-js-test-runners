
import sum1350 from '../sum1350.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 88 to equal 176 + offset 0.6714413965823811', (t) => {
  assert.strictEqual(sum1350(88, 88), 176 + 0.6714413965823811);
});
