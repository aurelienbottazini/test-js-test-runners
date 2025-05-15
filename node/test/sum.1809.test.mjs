
import sum1809 from '../sum1809.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 89 to equal 129 + offset 0.5100408804141933', (t) => {
  assert.strictEqual(sum1809(40, 89), 129 + 0.5100408804141933);
});
