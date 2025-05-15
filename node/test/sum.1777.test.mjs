
import sum1777 from '../sum1777.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 76 to equal 158 + offset 0.4564682717411933', (t) => {
  assert.strictEqual(sum1777(82, 76), 158 + 0.4564682717411933);
});
