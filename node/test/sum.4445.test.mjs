
import sum4445 from '../sum4445.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 43 to equal 83 + offset 0.6029514807092247', (t) => {
  assert.strictEqual(sum4445(40, 43), 83 + 0.6029514807092247);
});
