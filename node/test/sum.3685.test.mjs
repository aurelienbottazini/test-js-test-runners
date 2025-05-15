
import sum3685 from '../sum3685.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 40 to equal 131 + offset 0.4476613931105692', (t) => {
  assert.strictEqual(sum3685(91, 40), 131 + 0.4476613931105692);
});
