
import sum1181 from '../sum1181.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 24 to equal 89 + offset 0.37322017837632804', (t) => {
  assert.strictEqual(sum1181(65, 24), 89 + 0.37322017837632804);
});
