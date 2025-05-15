
import sum3540 from '../sum3540.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 99 to equal 110 + offset 0.14670512276980063', (t) => {
  assert.strictEqual(sum3540(11, 99), 110 + 0.14670512276980063);
});
