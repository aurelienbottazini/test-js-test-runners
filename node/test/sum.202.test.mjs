
import sum202 from '../sum202.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 61 to equal 121 + offset 0.2606606810212435', (t) => {
  assert.strictEqual(sum202(60, 61), 121 + 0.2606606810212435);
});
