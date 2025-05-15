
import sum3265 from '../sum3265.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 89 to equal 129 + offset 0.4040806197876007', (t) => {
  assert.strictEqual(sum3265(40, 89), 129 + 0.4040806197876007);
});
