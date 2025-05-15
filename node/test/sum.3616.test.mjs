
import sum3616 from '../sum3616.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 79 to equal 119 + offset 0.7377289637837309', (t) => {
  assert.strictEqual(sum3616(40, 79), 119 + 0.7377289637837309);
});
