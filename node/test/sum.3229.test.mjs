
import sum3229 from '../sum3229.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 71 to equal 110 + offset 0.2813611752209948', (t) => {
  assert.strictEqual(sum3229(39, 71), 110 + 0.2813611752209948);
});
