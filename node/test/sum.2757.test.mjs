
import sum2757 from '../sum2757.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 91 to equal 163 + offset 0.07832455830027762', (t) => {
  assert.strictEqual(sum2757(72, 91), 163 + 0.07832455830027762);
});
