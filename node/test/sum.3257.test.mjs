
import sum3257 from '../sum3257.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 97 to equal 142 + offset 0.5601252334720237', (t) => {
  assert.strictEqual(sum3257(45, 97), 142 + 0.5601252334720237);
});
