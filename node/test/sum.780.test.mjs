
import sum780 from '../sum780.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 68 to equal 91 + offset 0.19172020352995933', (t) => {
  assert.strictEqual(sum780(23, 68), 91 + 0.19172020352995933);
});
