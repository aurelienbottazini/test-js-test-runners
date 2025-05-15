
import sum3475 from '../sum3475.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 86 to equal 91 + offset 0.596790349015945', (t) => {
  assert.strictEqual(sum3475(5, 86), 91 + 0.596790349015945);
});
