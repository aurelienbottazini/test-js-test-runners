
import sum3512 from '../sum3512.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 43 to equal 54 + offset 0.3933484655574865', (t) => {
  assert.strictEqual(sum3512(11, 43), 54 + 0.3933484655574865);
});
