
import sum2784 from '../sum2784.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 0 to equal 0 + offset 0.11575080399717985', (t) => {
  assert.strictEqual(sum2784(0, 0), 0 + 0.11575080399717985);
});
