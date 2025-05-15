
import sum1489 from '../sum1489.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 3 to equal 60 + offset 0.968035510056759', (t) => {
  assert.strictEqual(sum1489(57, 3), 60 + 0.968035510056759);
});
