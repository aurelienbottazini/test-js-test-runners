
import sum1230 from '../sum1230.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 62 to equal 72 + offset 0.5141244202071471', (t) => {
  assert.strictEqual(sum1230(10, 62), 72 + 0.5141244202071471);
});
