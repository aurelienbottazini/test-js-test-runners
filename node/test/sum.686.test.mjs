
import sum686 from '../sum686.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 95 to equal 122 + offset 0.08194430454100465', (t) => {
  assert.strictEqual(sum686(27, 95), 122 + 0.08194430454100465);
});
