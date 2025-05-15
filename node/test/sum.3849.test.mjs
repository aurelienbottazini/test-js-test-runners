
import sum3849 from '../sum3849.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 34 to equal 105 + offset 0.41998833942051605', (t) => {
  assert.strictEqual(sum3849(71, 34), 105 + 0.41998833942051605);
});
